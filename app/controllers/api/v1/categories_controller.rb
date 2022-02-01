module Api
    module V1
        class CategoriesController < ApplicationController
            def index
                categories = Category.all();
                render json: {status: 'SUCCESS', message: 'All categories present', data: categories}, status: :ok
            end

            def create
                category = Category.new(category_params);
                if category.save
                    render json: {status: 'SUCCESS', message: 'Category saved', data: category}, status: :ok
                else
                    render json: {status: 'ERROR', message: 'Category not saved', data: category.errors}, status: :unprocessable_entity
                end
            end

            def update
                category = Category.find(params[:id])
                if category.update(category_params)
                    render json: {status: 'SUCCESS', message: 'Category updated', data: category}, status: :ok
                else
                    render json: {status: 'ERROR', message: 'Category not updated', data: category.errors}, status: :unprocessable_entity
                end
            end

            private

            def category_params
                params.permit(:categoryname)
            end
        end
    end
end