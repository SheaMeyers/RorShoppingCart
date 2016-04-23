class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :edit, :update, :destroy]

  # GET /orders
  # GET /orders.json
  def index
    @orders = Order.all
  end

  # GET /orders/1
  # GET /orders/1.json
  def show
  end

  # GET /orders/new
  def new
    @order = Order.new
  end

  # GET /orders/1/edit
  def edit
  end

  # POST /orders
  # POST /orders.json
  def create
    product = order_params

    @order = Order.new(order_id: '1A', email: 'test@email.com', product_id: product, 
                        date: DateTime.now.to_date, quantity: '1', state: 'incomplete')

    if @order.save
      render :json => { :success => "success", :status_code => "200" }
    else
      render :json => { :error => "error", :status_code => "500" }
    end
  end

  # PATCH/PUT /orders/1
  # PATCH/PUT /orders/1.json
  def update
    respond_to do |format|
      if @order.update(order_params)
        format.html { redirect_to @order, notice: 'Order was successfully updated.' }
        format.json { render :show, status: :ok, location: @order }
      else
        format.html { render :edit }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /orders/1
  # DELETE /orders/1.json
  def destroy
    @order =  Order.where(product_id: params[:product_id]).first

    if @order.destroy
      render :json => { :success => "success", :status_code => "200" }
    else
      render :json => { :error => "error", :status_code => "500" }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def order_params
      params.require(:product_id)
    end
end
