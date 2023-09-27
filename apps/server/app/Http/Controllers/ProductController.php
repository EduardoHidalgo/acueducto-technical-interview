<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductCollection;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $OVERALL_DISCOUNT = 50;
        $search = $request->query('search');

        if ($search != null) {
            // Search value could contains unwanted white spaces or have upper characters,
            // with these the search string will be clean and ready for filtering operations.
            $search = trim(strtolower($search));
            $search = '%'.$search.'%';

            $products = Product::getManyByQuery($search);

            // Check each product if it is possible to apply the discount.
            foreach ($products as $product) {
                if ($product->searchIsPalindrome($search))

                $product->applyPalindromeDiscount($OVERALL_DISCOUNT);
            }

            return new ProductCollection($products);
        }

        // If search query was not provided, return all rows.
       return new ProductCollection(Product::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return $product;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
