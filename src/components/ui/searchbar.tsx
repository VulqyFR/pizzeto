'use client';

import { Search, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface SearchBarProps<T> {
    items: T[];
    getItemKey: (item: T) => string | number;
    getItemLabel: (item: T) => string;
    getSearchValue: (item: T) => string;
    onSelect: (item: T) => void;
    placeholder?: string;
    minQueryLength?: number;
    className?: string;
    renderItem?: (item: T, handleSelect: () => void) => React.ReactNode;
}

export function SearchBar<T>({
    items,
    getItemKey,
    getItemLabel,
    getSearchValue,
    onSelect,
    placeholder = 'Rechercher...',
    minQueryLength = 1,
    className = '',
    renderItem,
}: SearchBarProps<T>) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (open) inputRef.current?.focus();
    }, [open]);

    useEffect(() => {
        if (!open) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                formRef.current &&
                !formRef.current.contains(event.target as Node)
            ) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    const handleClose = () => {
        setOpen(false);
        setQuery('');
    };

    const handleToggle = () => setOpen((v) => !v);

    const filtered =
        query.length >= minQueryLength
            ? items.filter((item) =>
                  getSearchValue(item)
                      .toLowerCase()
                      .includes(query.toLowerCase())
              )
            : [];

    const handleSelect = (item: T) => {
        handleClose();
        onSelect(item);
    };

    const defaultRenderItem = (item: T, handleSelectItem: () => void) => (
        <li
            key={getItemKey(item)}
            className="px-3 py-2 cursor-pointer hover:bg-muted rounded"
            onClick={handleSelectItem}
        >
            {getItemLabel(item)}
        </li>
    );

    return (
        <div className={`relative flex items-center ${className}`}>
            <button
                type="button"
                className="p-2 rounded-full bg-background hover:bg-muted transition z-10"
                onClick={handleToggle}
                aria-label="Ouvrir la recherche"
            >
                <Search size={20} className="text-muted-foreground" />
            </button>
            <form
                ref={formRef}
                className={`
                    absolute left-0 -top-1 flex flex-col bg-background border border-muted-foreground/20 z-50
                    rounded-2xl px-2 py-2 shadow transition-all duration-300
                    ${
                        open
                            ? 'opacity-100 w-56 pointer-events-auto translate-x-12'
                            : 'opacity-0 w-0 pointer-events-none translate-x-8'
                    }
                `}
                style={{ minHeight: 40 }}
                onSubmit={(e) => e.preventDefault()}
                autoComplete="off"
            >
                <div className="flex items-center gap-2">
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={placeholder}
                        className="bg-transparent outline-none flex-1 text-foreground placeholder:text-sm placeholder:text-muted-foreground min-w-0"
                    />
                    <button
                        type="button"
                        onClick={handleClose}
                        className="p-1 rounded-full hover:bg-muted transition"
                        aria-label="Fermer la recherche"
                    >
                        <X size={16} />
                    </button>
                </div>

                {filtered.length > 0 && (
                    <ul className="mt-2 bg-background rounded-lg shadow border border-muted max-h-64 overflow-y-auto">
                        {filtered.map((item) =>
                            renderItem
                                ? renderItem(item, () => handleSelect(item))
                                : defaultRenderItem(item, () =>
                                      handleSelect(item)
                                  )
                        )}
                    </ul>
                )}

                {query.length >= minQueryLength && filtered.length === 0 && (
                    <div className="mt-2 px-3 py-2 text-muted-foreground text-sm">
                        Aucun résultat trouvé.
                    </div>
                )}
            </form>
        </div>
    );
}
