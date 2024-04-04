import React from 'react'

const Search = () => {
    return (
        <form className="flex justify-between shadow-md bg-COLOR_4 px-3 py-2 rounded-[20px]">
            <input
                className="searchInput w-full px-3 outline-none bg-transparent text-COLOR_2 placeholder:text-COLOR_2 placeholder:text-opacity-50 Vazirmatn-SemiBold"
                placeholder="جستجوی کتاب..."
                type="search"
                id="searchInput"
            />
            <button type="submit">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.7 18.3L15.5 14.1C15.3 13.9 15 13.8 14.7 13.8C15.5 12.8 16 11.4 16 10C16 6.7 13.3 4 10 4C6.7 4 4 6.7 4 10C4 13.3 6.7 16 10 16C11.4 16 12.8 15.5 13.8 14.6C13.8 14.9 13.8 15.2 14.1 15.4L18.3 19.6C18.5 19.8 18.8 19.9 19 19.9C19.2 19.9 19.5 19.8 19.7 19.6C20.1 19.3 20.1 18.7 19.7 18.3ZM10 14.5C7.5 14.5 5.5 12.5 5.5 10C5.5 7.5 7.5 5.5 10 5.5C12.5 5.5 14.5 7.5 14.5 10C14.5 12.5 12.5 14.5 10 14.5Z" fill="#E57C23" />
                </svg>
            </button>
        </form>
    )
}

export default Search
