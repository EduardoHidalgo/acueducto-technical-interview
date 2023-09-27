<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    protected $model = Product::class;
   

    /**
     * @return array<Product>
     */
    public function definition(): array
    {

        return [];
    }

     /**
     * @return array<Product>
     */
    public function randomized(string $name, 
        string $description, 
        string $image, 
        string $brand): self
    {
        $minPrice = 20;
        $maxPrice = 75;
        $genders = array("M", "F", "N");

        return $this->state([
            'brand' => $brand,
            'description' => $description,
            'discount' => 0,
            'discountedPrice' => 0,
            'gender' => $genders[array_rand($genders)],
            'image' => $image,
            'name' => $name,
            'price' => rand($minPrice, $maxPrice),
        ]);
    }

      /**
     * @return array<Product>
     */
    public function forSeeder(string $name, 
        string $description, 
        string $image, 
        string $brand): self
    {
        $minPrice = 20;
        $maxPrice = 75;
        $genders = array("M", "F", "N");

        return $this->state([
            'brand' => $brand,
            'description' => $description,
            'gender' => $genders[array_rand($genders)],
            'image' => $image,
            'name' => $name,
            'price' => rand($minPrice, $maxPrice),
        ]);
    }
}
