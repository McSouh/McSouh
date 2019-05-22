<?php

use Illuminate\Database\Seeder;

class ProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('projects')->insert([
            array(
                'title' => 'Portfolio (McSouh)', 
                'description' => 'My personal portfolio, made with a combination of Laravel and React, to train myself with all the Laravel framework but also interact with it with Ajax Request (Axios) from React Components.',
                'image' => '/img/portfolio-mcsouh.png', 
                'github' => 'fake.url.lorem'),
            array(
                'title' => 'Labs with Wordpress', 
                'description' => 'This was a project at my traineeship (Molengeek). We received a template (html/css/js) of a static page, and we had to create a theme, and some plugins on Wordpress, to make it dynamic and customizable for someone who doesn\'t want to write a single line of code. I\'ve learn some PHP, SQL request, and how Wordpress works, his lifecycle, but mostly I\'ve learn the basics of MVC. I wasn\'t perfectly understanding it at that moment, but it was a start.', 
                'image' => '/img/labs-with-wordpress-molengeek.png', 
                'github' => 'fake.url.lorem'),
            array(
                'title' => 'Labs with Laravel', 
                'description' => 'After a project for my traineeship (a full Wordpress site with Theme/Plugin) customizable for a "fake client", I wanted to learn how Laravel works, so I learn the bare minimum to begin with the same project but in Laravel. It was really fun, I\'ve learn a lot doing this one, I really understand MVC architecture now, I\'ve also find ways to bind some datatable with other datatable, how I can add policies to my website, ... The most satisfying feature in this project was doing a "customizer" like I\'ve seen in Wordpress but in my way: when you\'re connected as an Administrator you see all the part that you can customise surrounded by a red border, and when you click on it, you get a modal with a form that have the right action path to update the exact data you want. I find it way more intuitive for people who doesn\'t want to pass through the code to update some content on their website.', 
                'image' => '/img/labs-with-laravel.png', 
                'github' => 'https://github.com/McSouh/LabsLaravel')
    ]);
    }
}
