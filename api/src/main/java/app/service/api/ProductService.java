package app.service.api;

import app.domain.dto.ProductDto;

import java.util.List;

public interface ProductService {
    List<ProductDto> getAllProducts();

    void create(ProductDto dto);

    void updateProduct(ProductDto dto,Long id);

    void deleteProduct(Long id);
}
