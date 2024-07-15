import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiInbox,
  HiOutlineLogout,
  HiUser,
  HiViewBoards,
  HiVideoCamera,
  HiPhotograph,
  HiQuestionMarkCircle,
  HiDocumentText,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function AdminSidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="h-full">
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href="/admin/blogs" icon={HiDocumentText}>
                Blogs
              </Sidebar.Item>
              <Sidebar.Item href="/admin/photostories" icon={HiPhotograph}>
                Photo Stories
              </Sidebar.Item>
              <Sidebar.Item href="/admin/videostories" icon={HiVideoCamera}>
                Video Stories
              </Sidebar.Item>
              <Sidebar.Item href="/admin/photostoriessingle" icon={HiPhotograph}>
                Photo Stories Single
              </Sidebar.Item>
              <Sidebar.Item href="/admin/videostoriessingle" icon={HiVideoCamera}>
                Video Stories Single
              </Sidebar.Item>
              <Sidebar.Item href="/admin/testimonials" icon={HiUser}>
                Testimonials
              </Sidebar.Item>
              <Sidebar.Item href="/admin/questions" icon={HiQuestionMarkCircle}>
                FAQs
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div>
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item icon={HiOutlineLogout}>
                <button
                  type="button"
                  onClick={handleLogout}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleLogout();
                    }
                  }}
                  className="cursor-pointer"
                >
                  Logout
                </button>

              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
}
export default AdminSidebar;
