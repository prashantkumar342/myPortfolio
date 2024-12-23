/* eslint-disable prettier/prettier */
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import React from "react";

// Define the interface for the props
interface TabDetails {
  title: string;
  description: React.ReactNode;
}

interface CustomTabProps {
  tabs: TabDetails[];
}

const CustomTab: React.FC<CustomTabProps> = ({ tabs }) => {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        {tabs.map((tab, index) => (
          <Tab key={index} title={tab.title}>
            <Card>
              <CardBody>{tab.description}</CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default CustomTab;
