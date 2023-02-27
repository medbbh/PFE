<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class vaccins extends Model
{

    use HasFactory;

    protected $fillable = ['nom','date_fab','date_exp','fabricant'];
    protected $table = 'vaccins';
}
