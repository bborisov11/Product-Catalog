package app.service.impl;

import app.domain.dto.ProductDto;
import app.domain.entity.Product;
import app.repository.ProductRepository;
import app.service.api.ProductService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.*;
import static org.mockito.ArgumentMatchers.any;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ProductServiceImplTest {
    private ProductService productService;

    @Mock
    private ProductRepository productRepository;

    @Before
    public void init(){
        this.productService = new ProductServiceImpl(this.productRepository);
    }

    public List<Product> products() {
        Product product = new Product("name", "descr", "image", 4.0);
        Product product1 = new Product("name1", "descr1", "image1", 5.0);

        List<Product> products = new ArrayList<>();
        products.add(product);
        products.add(product1);

        return products;
    }
    @Test
    public void getAllProducts() throws Exception {

        List<Product> products = this.products();
        Mockito.when(this.productRepository.findAll()).thenReturn(products);
        List<ProductDto> dtoProducts = this.productService.getAllProducts();

        for (int i = 0; i < products.size(); i++) {
            assertEquals(products.get(i).getName(), dtoProducts.get(i).getName());
            assertEquals(products.get(i).getDescription(), dtoProducts.get(i).getDescription());
            assertEquals(products.get(i).getImage(), dtoProducts.get(i).getImage());
            assertEquals(products.get(i).getPrice(), dtoProducts.get(i).getPrice(), 0.01);
        }
    }

    @Test
    public void getProductWithGivenId() throws Exception {
        Product product = new Product("name", "descr", "image", 4.0);
        Mockito.when(this.productRepository.findById(10L)).thenReturn(Optional.of(product));
        ProductDto dto = this.productService.getProductWithGivenId(10L);

        assertEquals(product.getName(), dto.getName());
        assertEquals(product.getDescription(), dto.getDescription());
        assertEquals(product.getImage(), dto.getImage());
        assertEquals(product.getPrice(), dto.getPrice(), 0.01);
    }

    @Test
    public void create() throws Exception {
        ProductDto dto = new ProductDto(null,"name", "descr", "image", 4.0);
        this.productService.create(dto);
        Product product = new Product("name", "descr", "image", 4.0);
        Mockito.verify(this.productRepository).save(product);
    }

    @Test
    public void updateProduct() throws Exception {

    }

    @Test
    public void deleteProduct() throws Exception {
    }

}