import React from 'react';
import NavItem from '../../../ATOMS/Navigation-A/NavItem-A/NavItem';
import c from './NavItems.module.scss';

const navItems = (props) => {
  const navItems = props.navItems.map(navItem => {
    return <NavItem 
      imgSrc={navItem.imgSrc}
      imgAlt={navItem.imgAlt}
      navType={navItem.navType}
      key={navItem.name} 
      path={navItem.path} 
      name={navItem.name} />
  });
  
  let classNames = props.className ? 
    [c.NavItems, props.className] : [c.NavItems];

  return (
    <ul className={classNames.join(' ')}>
      {navItems}
    </ul>
  );
}
 
export default navItems;