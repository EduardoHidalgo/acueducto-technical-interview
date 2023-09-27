<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public float $discountedPrice = 0;
    public float $discount = 0;
    
    function __construct(array $attributes = array()) {
        parent::__construct($attributes);
    }

    use HasFactory;

    public static function getManyByQuery(string $search) {
        // Search value could contains unwanted white spaces or have upper characters,
        // with these the search string will be clean and ready for filtering operations.
        $search = trim(strtolower($search));
        $search = '%'.$search.'%';

        // Multiple where conditions using OR's and lowercasing.
        return Product::whereRaw('LOWER(`name`) LIKE ? ', $search)
        ->orWhereRaw('LOWER(`description`) LIKE ? ', $search)
        ->orWhereRaw('LOWER(`brand`) LIKE ? ', $search)
        ->get();
    }

    public static function searchIsPalindrome(string $search) {
        // If reversed string equals to the same string.
        return strrev($search) == $search;
    }

    public function applyPalindromeDiscount(float $percentage) {
        $this->discountedPrice = ($percentage / 100) * $this->price;
        $this->discount = $percentage;

        return $this;
    }
}
