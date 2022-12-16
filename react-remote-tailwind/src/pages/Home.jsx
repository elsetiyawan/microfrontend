import React from 'react';
import Game from "../components/Game";

const Home = () => {
    return (
        <div className='flex p-10'>
            <div className='flex-auto'>
                <div>Antd Remote Counter Specs</div>
                <br/>
                <table className="table-auto border-collapse table-fixed">
                    <tbody>
                    <tr>
                        <td className="border border-slate-700">Framework</td>
                        <td className="border border-slate-700">React</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">Library</td>
                        <td className="border border-slate-700">
                            <ul>
                                <li>babel-loader</li>
                                <li>css-loader</li>
                                <li>file-loader</li>
                                <li>html-webpack-plugin</li>
                                <li>react</li>
                                <li>react-router-dom</li>
                                <li>style-loader</li>
                                <li>tailwindcss</li>
                                <li>webpack</li>
                                <li>webpack-cli</li>
                                <li>webpack-dev-server</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700 w-1/2">Styling</td>
                        <td className="border border-slate-700">Tailwind</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">Compiler</td>
                        <td className="border border-slate-700">Babel</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">Bundler</td>
                        <td className="border border-slate-700">Webpack</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">Orchestrator</td>
                        <td className="border border-slate-700">Module Federation</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex-auto'><Game/></div>
        </div>
    );
}

export default Home;
