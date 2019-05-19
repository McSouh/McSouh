<?php

namespace App;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title', 'description', 'image', 'github',
    ];

    public function skills()
    {
        return $this->belongsToMany('App\Skill');
    }
}
