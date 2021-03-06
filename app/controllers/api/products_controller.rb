class Api::ProductsController < Api::ApiController
  before_action :set_product, only: [:edit, :update, :destroy]

  def index
    render json: Product.all.order(:created_at)
  end

  def create
    product = Product.new(product_params)
    if product.save
      render json: product
    else
      render json: { errors: product.errors }, status: 422
    end
  end

  def edit
    if @product.update(product_params)
      render json: @product
    else
      render json: { errors: product.errors }, status: 422
    end
  end

  def update
    @product.update(purchased: !@product.purchased)    
    render json: @product
  end

  def destroy
    @product.destroy
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:name, :purchased)
  end

end