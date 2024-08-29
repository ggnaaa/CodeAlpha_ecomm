import{Row, Col} from 'react-bootstrap';
import { productArray } from '../productsStore';
import ProductCard from '../components/Productcard';

function Store(){
    return(
    <>
        <h1 align="center" className='p-3'>Welcome to Ornaments world!!</h1>
        <Row xs={1} md={4} className= 'g-4'>
            {productArray.map((product, index)=> (
                <Col align="center" key={index}>
                    <ProductCard product = {product}/>
                </Col>
            ))}
            
            
        </Row>
    </>
    )
}

export default Store;