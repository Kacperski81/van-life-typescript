import { useOutletContext } from 'react-router-dom';
import { ContextType } from '../pages/Host/HostVanDetails';

export function useHostVan() {
    return useOutletContext<ContextType>();
}