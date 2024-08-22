import AdminSidebar from '@/components/AdminSideBar'; // Adjust path as needed

const AdminHome = () => {
    return (
        <AdminSidebar>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p>Welcome to the Admin Dashboard. Here you can manage your admin settings and overview.</p>
        </AdminSidebar>
    );
};

export default AdminHome;
