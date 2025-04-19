




import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Layout from "./components/Layout";
import Services from "./components/Services";
import Profile from "./Pages/Profile";
import ViewBlog from "./Admin/ViewBlog";
import FrontendBlogs from "./Admin/FrontendBlogs";
import Viewsmallsubcategory from "./Admin/Viewsmallsubcategory";
import Addtocart from "./components/Addtocart";
import MyOrders from "./components/Userorder";
import AdminLayout from "./Admin/AdminLayout";
import Dashboard from "./Admin/Dashboard";
import Enquiries from "./Admin/Enquiries";
import BlogForm from "./Admin/Blogs";
import GetBlogs from "./Admin/GetBlogs";
import CategoryForm from "./Admin/Categoryform";
import SubCategoryy from "./Admin/SubCategoryy";
import SmallsubcategoryForm from "./Admin/Smallsubcategory";
import Getcategoryform from "./Admin/Getcategoryform";
import Getsubcategoryform from "./Admin/Getsubcategory";
import Getsmallsubcategory from "./Admin/Getsmallsubcategory";
import Updateblog from "./Admin/Updateblog";
import UpdateCategoryForm from "./Admin/Updatecategory";
import UpdateSubcategoryForm from "./Admin/UpdateSubcategory";
import UpdateSubSmallCategoryForm from "./Admin/Updatesubsmallcategory";
import Getorders from "./Admin/Getorders";
import UserDashboard from "./User/UserDashboard";
import PrivateRoute from "./components/PrivateRoute";
import AboutUs from "./components/About";
import ContactUs from "./components/Contact";
import Surveyform from "./components/Surveyform";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import UserBlogs from "./components/UserBlogs";
import GetUserBlogs from "./components/Getuserblogs";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public routes: only login, signup, password features */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:id/:token" element={<ResetPassword />} />


        {/* Protected Routes for everything else */}
        <Route path="/" element={<PrivateRoute><Layout /></PrivateRoute>}>
          <Route index element={<Services />} />
          <Route path="services" element={<Services />} />
          <Route path="profilepagee" element={<Profile />} />
          <Route path="blogs" element={<FrontendBlogs />} />
          <Route path="viewblog/:id" element={<ViewBlog />} />
          <Route path="viewsmallcategory/:categoryname/:subcategoryname" element={<Viewsmallsubcategory />} />
          <Route path="addtocart" element={<Addtocart />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="survey" element={<Surveyform/>} />

          



          <Route
  path="/my-orders"
  element={<MyOrders />}
/>

        </Route>

        {/* Protected Admin Routes */}
        <Route path="/dashboard" element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="blogs" element={<BlogForm />} />
          <Route path="getblogs" element={<GetBlogs />} />
          <Route path="category" element={<CategoryForm />} />
          <Route path="getcategory" element={<Getcategoryform />} />
          <Route path="subcategory" element={<SubCategoryy />} />
          <Route path="getsubcategory" element={<Getsubcategoryform />} />
          <Route path="smallcategory" element={<SmallsubcategoryForm />} />
          <Route path="getsmallsubcategory" element={<Getsmallsubcategory />} />
          <Route path="updateblog/:id" element={<Updateblog />} />
          <Route path="updatecategory/:id" element={<UpdateCategoryForm />} />
          <Route path="updatesubcategory/:categoryId/:subcategoryId" element={<UpdateSubcategoryForm />} />
          <Route path="updatesmallsubcategory/:categoryId/:subcategoryId/:smallsubcategoryId" element={<UpdateSubSmallCategoryForm />} />
          <Route path="getpendingorders" element={<Getorders />} />

        </Route>

        {/* Protected User Dashboard */}
        <Route path="/userdashboard" element={<PrivateRoute><UserDashboard /></PrivateRoute>} />
        <Route path="/userblog" element={<UserBlogs/>} />

        <Route path="/getuserblog" element={<GetUserBlogs/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
