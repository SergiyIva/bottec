import {PageLayout} from "../../components/PageLayout";
import {TopBanner} from "./TopBanner/TopBanner.tsx";
import {WhatIs} from "./WhatIs/WhatIs.tsx";
import {WhyWebApps} from "./WhyWebApps/WhyWebApps.tsx";

// type WebAppProps = {
//
// };
export const WebApp = () => {
    return (
        <PageLayout>
            <TopBanner/>
            <WhatIs/>
            <WhyWebApps/>
            <div>Content</div>
        </PageLayout>
    );
};