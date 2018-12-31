package app.service.impl;

import app.domain.dto.ProductDto;
import app.domain.entity.Product;
import app.repository.ProductRepository;
import app.service.api.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<ProductDto> getAllProducts() {

        return this.productRepository.findAll()
                .stream()
                .map(x -> new ProductDto(x.getId(), x.getName(), x.getDescription(),
                        x.getImage(), x.getPrice()))
                .collect(Collectors.toList());
    }

    @Override
    public ProductDto getProductWithGivenId(Long id) {
        Product product = this.productRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("No such product!"));

        return new ProductDto(product.getId(), product.getName(), product.getDescription(),
                product.getImage(), product.getPrice());
    }

    public void create(ProductDto dto) {
        Product product = new Product(dto.getName(), dto.getDescription(),
                dto.getImage(), dto.getPrice());

        this.productRepository.save(product);
    }

    public void updateProduct(ProductDto dto) {

        Product product = this.productRepository.findById(dto.getId())
                .orElseThrow(() -> new IllegalArgumentException("No such product!"));

        product.setName(dto.getName());
        product.setDescription(dto.getDescription());
        product.setImage(dto.getImage());
        product.setPrice(dto.getPrice());

        this.productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        this.productRepository.deleteById(id);
    }
}
