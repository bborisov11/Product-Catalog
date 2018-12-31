package app.service.api;

import app.domain.dto.ProductDto;

import java.util.List;

public interface ProductService {
    List<ProductDto> getAllProducts();

    ProductDto getProductWithGivenId(Long id);

    void create(ProductDto dto);

    void updateProduct(ProductDto dto);

    void deleteProduct(Long id);
}
