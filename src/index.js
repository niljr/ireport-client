import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Drawer } from 'native-base';

import PageOne from './PageOne';
import PageTwo from './PageTwo';

import Report from './components/Report';
import CreateReport from './components/createReport';
import Profile from './components/profile';
import SideBarFilter from './components/sideBarFilter';

export default class App extends Component {
  render() {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBarFilter navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} 
      >
        <Router>
          <Scene key="root" hideNavBar={true}>
            <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
            <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
            <Scene key="report" component={Report} title="report" />
            <Scene key="createReport" component={CreateReport} title="Create Report" />
            <Scene key="profile" component={Profile} title="Profile" />
          </Scene>
        </Router>
      </Drawer>
    )
  }
}