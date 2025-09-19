import 'normalize.css';
import './App.css'
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MenuCardPage from "./pages/MenuCardPage.jsx";
import PicturesPage from "./pages/PicturesPage.jsx";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {PRODUCTS_DATA} from "./data/data.js";

function App() {
    return (
        <Tabs>
            <TabList>
                <Tab>Menu</Tab>
                <Tab>Pictures</Tab>
            </TabList>

            <TabPanel>
                <MenuCardPage products={PRODUCTS_DATA} />
            </TabPanel>
            <TabPanel>
                <PicturesPage />
            </TabPanel>
        </Tabs>
    );
}

export default App;

