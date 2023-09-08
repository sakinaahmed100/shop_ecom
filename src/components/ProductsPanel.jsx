import { useFilterContext } from '../context/filterContext'
import GridView from './GridView'
import ListView from './ListView'

export default function ProductsPanel() {
    const { filtered_products, grid_view, loading } = useFilterContext()
    if (loading) {
        return (<div>Loading...</div>)
    }
    else {
        if (grid_view) {
            return (
                <>
                    <GridView filtered_products={filtered_products}></GridView>
                </>
            )
        }

        else {
            return (<ListView filtered_products={filtered_products}></ListView>)
        }
    }

}
