import AdminSidebar from '@/components/AdminSideBar'; // Adjust path as needed
import StackedImages from '@/components/widget/stackedImage';

const AdminUsers = () => {
    return (
        <AdminSidebar>
            <h1 className="text-2xl font-bold">Contact Management</h1>
            <p>Here you can manage the users of the application.</p>
            {/* Insert your user management component or content here */}
            <StackedImages/>
        </AdminSidebar>
    );
};

export default AdminUsers;
