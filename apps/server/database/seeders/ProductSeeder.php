<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->hardcodedSeed();
    }

    private function hardcodedSeed(): void {
        $brands = ['Nike', 'Puma', 'Avid Diva', 'Anna', 'Alula', 'Cammac', 'Civic', 'Dewed', 'Eve', 'Kayak', 'Noon', 'Tenet'];

        Product::factory()->count(1)->forSeeder(
            'Air Zoom Pegasus 39',
            'Lightweight, flexible shoes with cushioned soles designed to absorb impact and provide support for running.',
            'https://firebasestorage.googleapis.com/v0/b/acueducto-7ac09.appspot.com/o/1.jpg?alt=media&token=44b5111a-49c4-473d-8da9-ff4c03a573ab',
            $brands[array_rand($brands)],
        )->create();

        Product::factory()->count(1)->forSeeder(
            'Ultraboost 239',
            'Running shoes with ultra-soft Boost cushioning and a responsive Primeknit upper.',
            'https://firebasestorage.googleapis.com/v0/b/acueducto-7ac09.appspot.com/o/10.jpg?alt=media&token=21d4bb3f-0c1d-49a8-8abc-a08169eb2347',
            $brands[array_rand($brands)],
        )->create();

        Product::factory()->count(1)->forSeeder(
            'Triumph 20',
            'Running shoes with soft, responsive cushioning and a supportive upper.',
            'https://firebasestorage.googleapis.com/v0/b/acueducto-7ac09.appspot.com/o/11.jpg?alt=media&token=a532c884-4e9b-4112-bf67-04d898f5f0c9',
            $brands[array_rand($brands)],
        )->create();

        Product::factory()->count(1)->forSeeder(
            'Ghost 15',
            'Running shoes with lightweight, responsive cushioning and a comfortable fit.',
            'https://firebasestorage.googleapis.com/v0/b/acueducto-7ac09.appspot.com/o/12.jpg?alt=media&token=c4ebfa17-449d-4996-8eb6-55e5aedb612b',
            $brands[array_rand($brands)],
        )->create(); 
        
        Product::factory()->count(1)->forSeeder(
            'Balance Fresh Foam 1080 v13',
            'Running shoes with soft, cushioned foam and a supportive upper.',
            'https://firebasestorage.googleapis.com/v0/b/acueducto-7ac09.appspot.com/o/13.jpg?alt=media&token=4870b35b-2ad1-4ef7-949f-cd19ecb46b59',
            $brands[array_rand($brands)],
        )->create(); 

        Product::factory()->count(1)->forSeeder(
            'One One Bondi 8',
            'Running shoes with ultra-cushioned foam and a smooth ride.',
            'https://firebasestorage.googleapis.com/v0/b/acueducto-7ac09.appspot.com/o/14.jpg?alt=media&token=0fdcef91-e439-4364-90e5-96930753987e',
            $brands[array_rand($brands)],
        )->create(); 

        Product::factory()->count(1)->forSeeder(
            'Gel-Nimbus 25',
            'Running shoes with responsive cushioning and a supportive upper.',
            'https://firebasestorage.googleapis.com/v0/b/acueducto-7ac09.appspot.com/o/15.jpg?alt=media&token=5f8ab61d-e7ee-4b66-8b7f-c7e0b0e892f1',
            $brands[array_rand($brands)],
        )->create(); 

        Product::factory()->count(1)->forSeeder(
            'Wave Rider 26',
            'Running shoes with responsive Wave technology and a comfortable fit.',
            'https://firebasestorage.googleapis.com/v0/b/acueducto-7ac09.appspot.com/o/16.jpg?alt=media&token=b7e30b74-76bd-4de0-8a90-2fa47e149349',
            $brands[array_rand($brands)],
        )->create(); 

        Product::factory()->count(1)->forSeeder(
            'Armour HOVR Infinite 4',
            'Running shoes with responsive HOVR cushioning and smart technology that tracks your runs.',
            'https://firebasestorage.googleapis.com/v0/b/acueducto-7ac09.appspot.com/o/2.jpg?alt=media&token=2ffafd4b-5d69-4b02-a607-6e377b935fd5',
            $brands[array_rand($brands)],
        )->create(); 

        Product::factory()->count(1)->forSeeder(
            'Cloudstratus 3',
            'Running shoes with soft, responsive cushioning and a comfortable fit.',
            'https://firebasestorage.googleapis.com/v0/b/acueducto-7ac09.appspot.com/o/3.jpg?alt=media&token=bea98da6-07fa-4ed4-9ad0-2ba2cab3f582',
            $brands[array_rand($brands)],
        )->create(); 

        Product::factory()->count(1)->forSeeder(
            'Deviate Nitro',
            'Running shoes with responsive Nitro foam and a supportive upper.',
            'https://firebasestorage.googleapis.com/v0/b/acueducto-7ac09.appspot.com/o/4.jpg?alt=media&token=fde01028-365c-4df0-889a-bc083d84afba',
            $brands[array_rand($brands)],
        )->create(); 

        Product::factory()->count(1)->forSeeder(
            'Speedcross 5',
            'Trail running shoes with aggressive grip and powerful cushioning.',
            'https://firebasestorage.googleapis.com/v0/b/acueducto-7ac09.appspot.com/o/5.jpg?alt=media&token=5d6399d4-1be7-451e-822a-4fcd8bc3e10c',
            $brands[array_rand($brands)],
        )->create(); 

        Product::factory()->count(1)->forSeeder(
            'Floatride Energy 4',
            'Running shoes with lightweight, responsive Floatride foam and a comfortable fit.',
            'https://firebasestorage.googleapis.com/v0/b/acueducto-7ac09.appspot.com/o/6.jpg?alt=media&token=b453b832-b53f-4b02-86bd-a2c60e3cd527',
            $brands[array_rand($brands)],
        )->create(); 

        Product::factory()->count(1)->forSeeder(
            'Moab 3 Mid',
            'Hiking shoes with durable construction, supportive midsoles, and Vibram traction.',
            'https://firebasestorage.googleapis.com/v0/b/acueducto-7ac09.appspot.com/o/7.jpg?alt=media&token=e6026574-019d-4743-a6c5-1588e1aedd80',
            $brands[array_rand($brands)],
        )->create(); 

        Product::factory()->count(1)->forSeeder(
            'Sawtooth Low',
            'Hiking shoes with lightweight construction, supportive midsoles, and grippy outsoles.',
            'https://firebasestorage.googleapis.com/v0/b/acueducto-7ac09.appspot.com/o/8.jpg?alt=media&token=da69d688-ad73-4d09-9138-0ea1410b5bee',
            $brands[array_rand($brands)],
        )->create(); 

        Product::factory()->count(1)->forSeeder(
            'Lone Peak 6',
            'Trail running shoes with a zero-drop platform and wide toe box.',
            'https://firebasestorage.googleapis.com/v0/b/acueducto-7ac09.appspot.com/o/9.jpg?alt=media&token=fc875cbc-e088-4026-82a9-dc693a9653fb',
            $brands[array_rand($brands)],
        )->create(); 
    }
}