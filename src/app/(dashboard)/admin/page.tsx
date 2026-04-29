import UserCard from "@/components/UserCard";

const AdminPage = () => {
    return (
        <div className="p-4 gap-4 flex flex-col md:flex-row">
            {/* LEFT */}
         <div className="w-full lg:w-3/4">
         {/* USER CARDS */}
         <div className="">
            <UserCard type="Student"/>
         </div>
         </div>
            {/* RIGHT */}
            <div className="w-full lg:w-1/4"></div>
        </div>
    );
}

export default AdminPage