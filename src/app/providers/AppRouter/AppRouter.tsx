import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {RouterConfig} from "./config/config";

const AppRouter = () => {
    return (
        <Suspense fallback={'Loading...'}>
            <Routes>
                {Object.values(RouterConfig).map(({path, element}) => {
                    return <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                })}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
