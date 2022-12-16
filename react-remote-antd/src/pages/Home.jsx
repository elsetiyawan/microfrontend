import React from 'react';
import Game from "../components/Game";

const Home = () => {
    return (
        <div className='wrapper'>
            <div className='screenSegment'>
                <div>Antd Remote Counter Specs</div>
                <br/>
                <table>
                    <tr>
                        <td>Framework</td>
                        <td>React</td>
                    </tr>
                    <tr>
                        <td>Library</td>
                        <td>
                            <ul>
                                <li>antd</li>
                                <li>babel-loader</li>
                                <li>css-loader</li>
                                <li>file-loader</li>
                                <li>html-webpack-plugin</li>
                                <li>react</li>
                                <li>react-router-dom</li>
                                <li>style-loader</li>
                                <li>webpack</li>
                                <li>webpack-cli</li>
                                <li>webpack-dev-server</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Styling</td>
                        <td>Ant Design</td>
                    </tr>
                    <tr>
                        <td>Compiler</td>
                        <td>Babel</td>
                    </tr>
                    <tr>
                        <td>Bundler</td>
                        <td>Webpack</td>
                    </tr>
                    <tr>
                        <td>Orchestrator</td>
                        <td>Module Federation</td>
                    </tr>
                </table>
            </div>
            <div className='screenSegment'><Game/></div>
        </div>
    );
}

export default Home;
