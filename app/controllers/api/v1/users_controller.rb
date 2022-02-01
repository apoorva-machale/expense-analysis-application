module Api
    module V1
        class UsersController < ApplicationController

            def index
                # users = User.order('userid DESC');
                # render json: {status: 'SUCCESS', message: 'Users loaded', data: users}, status: :ok
            end

            def show
                user = User.find(params[:id])
                render json: {status: 'SUCCESS', message: 'User loaded', data: user}, status: :ok
            end

            def create
                user = User.new(user_params)
                if user.save
                    render json: {status: 'SUCCESS', message: 'User saved', data: user}, status: :ok
                else
                    render json: {status: 'ERROR', message: 'User not saved', data: user.errors}, status: :unprocessable_entity
                end
            end

            def login
                @user = User.find_by(username: params[:username])
                if !!@user && @user.password == params[:password] 
                    render json: {status: 'SUCCESS', message: 'User LoggedIn', data: @user}, status: :ok
                else
                    render json: {status: 'ERROR', message: 'User Unauthorized', data: @user.errors}, status: :unauthorized
                end
            end

            def update
                user = User.find(params[:id])
                if user.update(user_params)
                    render json: {status: 'SUCCESS', message: 'User updated', data: user}, status: :ok
                else
                    render json: {status: 'ERROR', message: 'User not updated', data: user.errors}, status: :unprocessable_entity
                end
            end

            private

            def user_params
                params.permit(:username, :password)
            end
        end
    end
end