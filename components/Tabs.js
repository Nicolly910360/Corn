import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
        <Nav tabs>
            <NavItem>
            <NavLink href='/Friends'
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
            >
            Tab 1
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
            >
                More Tabs
            </NavLink>
            </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
            <Row>
                <Col sm="12">
                <h4>Tab 1 Contents</h4>
                </Col>
            </Row>
            </TabPane>
            <TabPane tabId="2">
            </TabPane>
        </TabContent>
    </div>
  );
}

export default Tabs;