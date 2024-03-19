import React, { Suspense } from 'react';
const LazyComponent = React.lazy(() => import("./LazyComponent"))
// Define a component that will be lazily loaded

const Parent = () => {
    return (
        <div>
            <Suspense fallback={<div>...Loading</div>}>
                <LazyComponent />
                 {/* LazyComponent will only be loaded when this part of the app is rendered  */}
            </Suspense>
        </div>
    );
};

export default Parent;
/* Suspense is used to display a fallback while the component is being loaded */

