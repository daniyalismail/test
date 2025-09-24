'use client';
import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { MenuItem } from 'primereact/menuitem';

interface TabMenuProps {
  activeIndex: number;
  onTabChange: (index: number) => void;
}

export default function Tab_Menu({ activeIndex, onTabChange }: TabMenuProps) {
  const items: MenuItem[] = [
    { label: 'Testing' },
    { label: 'Random Testing' },
    { label: 'Test' }
  ];

  return (
    <div className="tab_menu card">
      <TabMenu 
        model={items} 
        activeIndex={activeIndex}
        onTabChange={(e) => onTabChange(e.index)}
      />
    </div>
  );
}
