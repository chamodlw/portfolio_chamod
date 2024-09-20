import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MemoryIcon from '@mui/icons-material/Memory'; // For AI-related icon
import { styled } from '@mui/material/styles';

const CustomBottomNavigation = styled(BottomNavigation)({
  backgroundColor: 'rgba(0, 0, 0, 1)', // 50% black background
  color: '#fff', // White text color
  border: '2px solid #fff', // White border
  borderRadius: '30px', // Border radius 10px
});

export default function SimpleBottomNavigation({onTypeChange}) {
  const [type, setType] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <CustomBottomNavigation
      showLabels
      value={type}
      onChange={(event, newType) => {
        setType(newType);
        onTypeChange(newType); // Pass the newType to parent
      }}
      >

        <BottomNavigationAction
          label="Web Apps"
          icon={<DesktopMacIcon />}
          sx={{ color: '#fff' }} // Icon and text color white
        />
        <BottomNavigationAction
          label="Mobile Apps"
          icon={<SmartphoneIcon />}
          sx={{ color: '#fff' }}
        />
        <BottomNavigationAction
          label="AI Projects"
          icon={<MemoryIcon />}
          sx={{ color: '#fff' }}
        />
      </CustomBottomNavigation>
    </Box>
  );
}
