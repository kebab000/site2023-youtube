import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
    HeaderCont,
    MainConts,
    VideoConts,
    ChannelConts,
    SearchConts,
} from './components';

const App = () => {
    return (
        <BrowserRouter>
            <HeaderCont />
            <Routes>
                <Route path="/" element={<MainConts />}></Route>
                <Route path="/video" element={<VideoConts />}></Route>
                <Route path="/channel" element={<ChannelConts />}></Route>
                <Route path="/search" element={<SearchConts />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
