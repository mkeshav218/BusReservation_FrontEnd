import React from 'react';
import { DashboardLayout } from './SideComponent/DashBoardLayOut';

class AboutUs extends React.Component {
    render() {
        return (
            <DashboardLayout>
                <div>
                    <h1 style={{ color: "white" }}>AboutUs Component</h1>
                </div>
            </DashboardLayout>

        )
    }
}

export default AboutUs;