import { useNavigate, useLocation } from 'react-router-dom';

const useNavigateTo = () => {
    const navigate = useNavigate();
    const location = useLocation();
  
    const navigateTo = (path, id) => {
        const absolutePath = path.startsWith('/') ? path : `/${path}`;
        const currentPath = location.pathname;

        console.log(`Navigating to: ${absolutePath} with scrollToId: ${id}`);
        
        if (currentPath === absolutePath) {
            console.log(`Same path detected. Scrolling to id: ${id}`);
            if (id) {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        } else {
            navigate(absolutePath, { 
                state: { scrollToId: id },
                replace: true
            });
            // Remove the immediate scroll to top - let the scroll handler manage this
            if (!id) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };
  
    return navigateTo;
};

export default useNavigateTo;