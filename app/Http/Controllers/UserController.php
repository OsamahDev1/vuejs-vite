<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::orderBy('id', 'desc')->paginate(6);
        return inertia('home', [
            'users' => $users,
        ]);
    }

    public function update()
    {
        return inertia('update');
    }

    public function store(Request $req)
    {
        $req->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users,email'],
            'age' => ['required'],
            'city' => ['required'],
        ]);
        User::create($req->only('name', 'email', 'age', 'city'));

        return to_route('home');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return to_route('home');
    }
}
