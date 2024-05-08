import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useAllProducts from "../../hooks/useAllProducts";
import ProductCardTabs from "../../ProductCard/ProductCardTabs";

const Shop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [allItems] = useAllProducts();
    const mens = allItems.filter(item=> item.category === 'gents')
    const womens = allItems.filter(item=> item.category === 'ladies')
    const all = allItems.filter(item=> item.category === 'ladies' || 'gents' ||'both' ||'new')
    return (
        <div className="mx-20">
         <div>
         <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList className="font-extrabold">
    <Tab>Men</Tab>
    <Tab>Women</Tab>
    <Tab>All</Tab>
  </TabList>
  <TabPanel>
 <ProductCardTabs items={mens}></ProductCardTabs>
  </TabPanel>
  <TabPanel>
    <ProductCardTabs items={womens}></ProductCardTabs>
  </TabPanel>
  <TabPanel>
    <ProductCardTabs items={all}></ProductCardTabs>
  </TabPanel>
</Tabs>
         </div>
        </div>
    );
};

export default Shop;