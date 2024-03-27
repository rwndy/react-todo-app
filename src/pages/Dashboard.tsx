
import { ICwrite, ICmoney } from "@/assets/icons";

import '../styles/dashboard/dashboard.css'

type RoutingTypes = {
  id: number
  name: string
  icon: string
}[]


const Dashboard = () => {

  const routes: RoutingTypes = [
    {
      id: 1,
      name: 'Activity',
      icon: ICwrite
    },
    {
      id: 2,
      name: 'Saving',
      icon: ICmoney,
    }
  ]

  return (
    <main className="dashboard">
      <div className="dashboard-container">
        <aside className="dashboard-sidenavigation">
          <nav className="dashboard-sidenav">
            <ul className="dashboard-sidenav__container">
              {
                routes.map(route => (
                  <li key={route.id} className="dashboard-sidenav__list-item">
                    <img src={route.icon} style={{width: '16px', height:'16px'}}/>
                    { route.name }
                  </li>
                ))
              }
            </ul>
          </nav>
        </aside>
        <section className="dashboard-content">
          <div>
            <h1>Project</h1>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
