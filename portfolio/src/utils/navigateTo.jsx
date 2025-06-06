import { useNavigate } from 'react-router-dom';

const useNavigateTo = () => {
    const navigate = useNavigate();
  
    const navigateTo = (path, id) => {
      navigate(path, { state: { scrollToId: id } });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return navigateTo;
  };
  

export default useNavigateTo;