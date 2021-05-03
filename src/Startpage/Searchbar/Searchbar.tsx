import React from 'react';
import styled from "@emotion/styled";
import * as Settings from "../Settings/settingsHandler";

import google from "../../data/pictures/google.svg";
import duckduckgo from "../../data/pictures/duckduckgo.svg";
import qwant from "../../data/pictures/qwant.svg";

const StyledSearchbarContainer = styled.div`
    position: absolute;
    left: calc(0px - 2.9rem - 0px);
    right: 0px;
    bottom: 0px;
    height:min-content;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    `;
const StyledSearchbar = styled.input`
    width: 0%;
    font-size: 0pt;
    
    background-color: rgba(0,0,0,0);
    color: var(--default-color);
    transition: .3s;
    border: none;
    border-bottom: 0px solid var(--default-color);
    opacity: 0.3;
    
    ::placeholder {
        color: var(--default-color);
    }
    
    :hover, :focus {
        opacity: 1;
        outline: none;
    }
`;

const SearchIcon = styled.div<{ src: string }>`
    height: 2.9rem;
    width: 3.1rem;
    margin: auto 0px auto 0;

    background: var(--default-color);
    
    mask-size: cover;
    mask-image: url(${({ src }) => src});
`;

export const Searchbar = () => {
    const searchSettings = Settings.Search.getWithFallback();
    const engine: string = searchSettings?.engine || "duckduckgo.com/";

    let searchSymbol = duckduckgo;
    if (engine.startsWith("google"))
        searchSymbol = google;
    else if (engine.startsWith("qwant"))
        searchSymbol = qwant;

    const redirectToSearch = (query: string) => {
        if (searchSettings?.fastForward[query])
            window.location.href = searchSettings.fastForward[query];
        else
            window.location.href = "https://" + engine + "?q=" + query;
    }

    return (
        <StyledSearchbarContainer>
            <SearchIcon src={searchSymbol} />
            <StyledSearchbar
                placeholder="poggers!"
                type="input"
                onKeyUp={e => e.which === 13 && redirectToSearch(e.currentTarget.value)}
                autoFocus={true}
            />
        </StyledSearchbarContainer>
    );
}
