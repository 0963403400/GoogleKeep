// This file is not being used
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {MdOutlineLightbulb} from 'react-icons/md';
import {MdOutlineNotificationsNone} from 'react-icons/md';
import {FaPencilAlt} from 'react-icons/fa';
import {MdSaveAlt} from 'react-icons/md';
import {ImBin}  from 'react-icons/im';
import Header from './Header';
import { fontWeight } from '@mui/system';
import '../style2.css';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Header />
      <Box sx={{ display: 'flex' },{marginTop:"48px"}}>
      <CssBaseline />
      {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      

      <Drawer variant="permanent" open={open} sx={{marginTop:"48px"}}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button key="Ghi Ch??" >
              <ListItemIcon>
                <MdOutlineLightbulb className='hgdfgsdfghdg' />
              </ListItemIcon>
              <ListItemText primary="Ghi ch??" className='bdsbds' />
            </ListItem>
        </List>
        <List>
          <ListItem button key="L???i nh???c" >
              <ListItemIcon>
                <MdOutlineNotificationsNone className='hgdfgsdfghdg' />
              </ListItemIcon>
              <ListItemText primary="L???i nh???c" className='bdsbds' />
            </ListItem>
        </List>
        <List>
          <ListItem button key="Ch???nh s???a nh??n" >
              <ListItemIcon>
                <FaPencilAlt className='hgdfgsdfghdg' />
              </ListItemIcon>
              <ListItemText primary="Ch???nh s???a nh??n" className='bdsbds' />
            </ListItem>
        </List>
        <List>
          <ListItem button key="L??u tr???" >
              <ListItemIcon>
                <MdSaveAlt className='hgdfgsdfghdg' />
              </ListItemIcon>
              <ListItemText primary="L??u tr???" className='bdsbds' />
            </ListItem>
        </List>
        <List>
          <ListItem button key="Th??ng r??c" >
              <ListItemIcon>
                <ImBin className='hgdfgsdfghdg' />
              </ListItemIcon>
              <ListItemText primary="Th??ng r??c"  className='bdsbds'  />
            </ListItem>
        </List>        
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
    </div>
    
  );
}
