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

    @GetMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

   @PostMapping("/create")
   public String createProduct(@RequestBody ProductDto productDto) {
    try {
        this.productService.create(productDto);
        return "Successfully created product!";
    } catch (Exception ex) {
        return "Error. Invalid data";
    }
   }

    @GetMapping("/read")
    public List<ProductDto> readProduct() {
        return productService.getAllProducts();
    }

    @GetMapping("/read/{id}")
    public ProductDto readProductWithId(@PathVariable Long id) {
        return productService.getProductWithGivenId(id);
    }

    @PutMapping("/update/{id}")
    public String updateProduct(@RequestBody ProductDto productDto, @PathVariable Long id) {
        try {
            this.productService.updateProduct(productDto, id);
            return "Successfully updated product!";
        } catch (Exception ex) {
            return "Error. Invalid data";
        }
    }

    @DeleteMapping("/delete/{id}")
    public String deleteProduct(@PathVariable Long id) {
        try {
            this.productService.deleteProduct(id);
            return "Successfully deleted product!";
        } catch (Exception ex) {
            return "Error. Invalid data";
        }
    }
    
}
