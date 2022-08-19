// import React from "react";
// import { ShoppingBasket } from "@mui/icons-material";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import '../components/index.css'


// const Navbar = () => {
//   const { cart } = useSelector((state) => state);
//   return (
//     <>
//       <nav className="header">
//         <Link to={"/"}>
//           <div className="ml-5">
//             <h1 className="bg-gradient-to-br from-violet-900 to-purple-300 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl font-bold logo cursor-pointer tracking-wider">
//             Shopify
//             </h1>
//           </div>
//         </Link>
//         <div className="flex list-none items-center space-x-6 mr-5 text-gray-700 -tracking-tighterr font-semibold">
//           <Link to={"/"}>
//            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">Signup</li>
//           </Link>
//           <Link to={"/"}>
//            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">Signin</li>
//           </Link>
//           <Link to={"/"}>
//            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">Services</li>
//           </Link>

//           <Link to={"/cart"}>
//             <div className="relative">
//               <ShoppingBasket className="text-2xl cursor-pointer hover:text-purple-600 transition transform duration-200" />

//               {cart.length > 0 && (
//                 <div className="absolute bg-purple-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
//                   {cart.length}
//                 </div>
//               )}
//             </div>
//           </Link>
//         </div>
//       </nav>
//       <section>
//       <div className="box">
      
//       </div>
//       </section>
//     </>
//   );
// };

// export default Navbar;


import React from 'react'
import { AppBar, Button, IconButton, styled, Toolbar, Typography } from "@mui/material";
import "./index.css";
import { Link } from 'react-router-dom';

const useStyles = styled((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing,
  },
  title: {
    flexGrow: 1,
  },

}));

function Navbar() {
  const classes = useStyles();

  return (
    <div>
    <section className="nav">
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar sx={{marginX:'8rem'}}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        </IconButton>
        <Link to={'/'}>
        <Typography variant="h6" className={classes.title}>
          Shopify
        </Typography>
        </Link>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Register</Button>
        <Button color="inherit">Services</Button>
        <Button color="inherit">cart
         <h4>{0}</h4>

        </Button>

      </Toolbar>
    </AppBar>
  </div>
    </section>

    <section>
    <div className="box">
    
    </div>
    </section>
    </div>
  )
}

export default Navbar
