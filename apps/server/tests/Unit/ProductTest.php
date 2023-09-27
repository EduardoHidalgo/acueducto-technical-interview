<?php

namespace Tests\Unit;

use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductTest extends TestCase
{
    use RefreshDatabase;

    private float $price = 0;
    
    public function testPalindromeSearch(): void
    {
        $search = 'tenet';

        $this->assertTrue(Product::searchIsPalindrome($search), $search." word is a palindrome.");
    }

    public function testApplyDiscount() {
        $OVERALL_DISCOUNT = 50;

        $product = Product::factory()->randomized(
            'Moab 3 Mid',
            'Hiking shoes with durable construction, supportive midsoles, and Vibram traction.',
            'https://firebasestorage.googleapis.com/v0/b/acueducto-7ac09.appspot.com/o/7.jpg?alt=media&token=e6026574-019d-4743-a6c5-1588e1aedd80',
            'Tenet',
        )->makeOne();
        
        $product->applyPalindromeDiscount($OVERALL_DISCOUNT);

        $this->assertEquals($product->discountedPrice  * 2, $product->price, "Price was properly halved with discount.");
    }
}
