import Banner from './../components/pages/home/Banner';
import Search from './../components/pages/home/Search';
import Products from './../components/pages/home/Products';

export default function Home() {
    return (
        <div>
            <Banner></Banner>
            <Search></Search>
            <div>
                <Products></Products>
            </div>
        </div>
    );
}
