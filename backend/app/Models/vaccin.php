<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class vaccin extends Model
{
    use HasFactory;

    protected $fillable = ['nom','type','date_fab','date_exp','fabricant'];
    protected $table = 'vaccins';

}
