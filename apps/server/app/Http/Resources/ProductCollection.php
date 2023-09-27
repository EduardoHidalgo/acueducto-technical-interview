<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        $products = [];

        foreach($this->collection as $product) {

             array_push($products, [
                'brand' => $product->brand,
                'created_at' => $product->created_at,
                'description' => $product->description,
                'discount' => $product->discount,
                'discountedPrice' => $product->discountedPrice,
                'gender' => $product->gender,
                'id' => $product->id,
                'image' => $product->image,
                'name' => $product->name,
                'price' => $product->price,
                'updated_at' => $product->updated_at,
            ]);
        }

        return $products;
    }
}
