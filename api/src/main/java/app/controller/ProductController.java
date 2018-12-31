package app.controller;

import app.domain.dto.ProductDto;
import app.service.impl.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    private ProductServiceImpl productService;

    @Autowired
    public ProductController(ProductServiceImpl productService) {
        this.productService = productService;
    }

   @PostMapping("/create")
   public void createProduct(@RequestBody ProductDto productDto) {
        this.productService.create(productDto);
   }

    @GetMapping("/read")
    public List<ProductDto> readProduct() {
        return productService.getAllProducts();
    }

    @GetMapping("/read/{id}")
    public ProductDto readProductWithId(@PathVariable Long id) {
        return productService.getProductWithGivenId(id);
    }

    @PutMapping("/update")
    public void updateProduct(@RequestBody ProductDto productDto) {
            this.productService.updateProduct(productDto);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProduct(@PathVariable Long id) {
            this.productService.deleteProduct(id);
    }
}
